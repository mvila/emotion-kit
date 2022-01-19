import {useState, useRef, useCallback, useEffect} from 'react';
import {jsx} from '@emotion/react';

export type PopoverProps = {
  content: React.ReactNode;
  alignment?: 'left' | 'right';
  position?: 'bottom' | 'top' | 'cursor';
  className?: string;
  contentClassName?: string;
  children: ({
    isOpen,
    open,
    close
  }: {
    isOpen: boolean;
    open: (event?: any, context?: any) => void;
    close: () => void;
  }) => JSX.Element;
};

export function Popover({
  content,
  alignment = 'left',
  position = 'bottom',
  className,
  contentClassName,
  children
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const overlayPositionRef = useRef<{x: number; y: number}>();
  const contextRef = useRef<any>();
  const contentRef = useRef<HTMLDivElement>(null);

  const open = useCallback((event, context) => {
    if (event !== undefined) {
      overlayPositionRef.current = getOverlayPosition(event);
    }
    contextRef.current = context;
    setIsOpen(true);
    setTimeout(() => {
      addEventListeners();
    }, 0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    removeEventListeners();
  }, []);

  const handleBodyClick = useCallback((event) => {
    const isInsideContent = contentRef.current?.contains(event.target);

    if (!isInsideContent) {
      event.stopPropagation();
      close();
    }
  }, []);

  const handleBodyKeyDown = useCallback((event) => {
    const isEscapeKey = event.keyCode === 27;

    if (isEscapeKey) {
      event.stopPropagation();
      close();
    }
  }, []);

  const addEventListeners = useCallback(() => {
    document.addEventListener('click', handleBodyClick);
    document.addEventListener('keydown', handleBodyKeyDown);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('click', handleBodyClick);
    document.removeEventListener('keydown', handleBodyKeyDown);
  }, []);

  const getOverlayPosition = useCallback((event) => {
    const {offsetLeft: containerX, offsetTop: containerY} = event.currentTarget;
    const {offsetX = 0, offsetY = 0} = event.nativeEvent;

    return {
      x: containerX + offsetX,
      y: containerY + offsetY
    };
  }, []);

  const getAlignmentStyle = useCallback(() => {
    let alignmentStyle: any = {
      paddingTop: '5px',
      paddingBottom: '5px'
    };

    if (alignment === 'right') {
      alignmentStyle = {
        ...alignmentStyle,
        left: 'auto',
        right: 0
      };
    }

    if (position === 'top') {
      alignmentStyle = {
        ...alignmentStyle,
        bottom: '100%',
        top: 'auto'
      };
    }

    if (position === 'cursor' && overlayPositionRef.current !== undefined) {
      alignmentStyle = {
        ...alignmentStyle,
        top: overlayPositionRef.current.y,
        bottom: 'auto',
        left: overlayPositionRef.current.x
      };
    }

    return alignmentStyle;
  }, []);

  useEffect(() => {
    return removeEventListeners;
  }, []);

  return (
    <div className={className} css={{display: 'block', lineHeight: 0, position: 'relative'}}>
      {children({isOpen, open, close})}
      {isOpen && (
        <div
          className={contentClassName}
          css={{
            display: 'block',
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 20000
          }}
          style={getAlignmentStyle()}
        >
          <div ref={contentRef}>
            {typeof content === 'function' ? content({close, ...contextRef.current}) : content}
          </div>
        </div>
      )}
    </div>
  );
}
