import { BsGridFill, BsListUl } from 'react-icons/bs'
import { useCourtViewStore } from '@/store/useCourtViewStore'

const CourtViewModeToggle = ({ className }: { className?: string }) => {
    const viewMode = useCourtViewStore((s) => s.viewMode)
    const setViewMode = useCourtViewStore((s) => s.setViewMode)

    return (
        <ul className={`nav nav-pills nav-pills-dark ${className ?? ''}`}>
            <li className="nav-item">
                <button
                    type="button"
                    className={`nav-link ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                >
                    <BsListUl className="fa-fw mb-1" />
                </button>
            </li>

            <li className="nav-item">
                <button
                    type="button"
                    className={`nav-link ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                >
                    <BsGridFill className="fa-fw mb-1" />
                </button>
            </li>
        </ul>
    )
}


export default CourtViewModeToggle
